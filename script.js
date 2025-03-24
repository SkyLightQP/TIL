const fs = require("fs");
const path = require("path");

function extractHeading1FromMarkdown(filePath) {
  try {
    const content = fs.readFileSync(filePath, "utf8");
    const headingMatch = content.match(/^# (.+)$/m);
    if (headingMatch && headingMatch[1]) {
      return headingMatch[1].trim();
    }
  } catch (error) {
    console.error(`${filePath} 파일 읽기 오류:`, error);
  }

  return path.basename(filePath, path.extname(filePath));
}

function scanDirectory(rootDir, depth = 0) {
  const result = {};

  try {
    const items = fs.readdirSync(rootDir);

    for (const item of items) {
      const itemPath = path.join(rootDir, item);
      const stats = fs.statSync(itemPath);

      if (stats.isDirectory() && depth === 0) {
        result[item] = [];

        const subItems = fs.readdirSync(itemPath);
        for (const subItem of subItems) {
          const subItemPath = path.join(itemPath, subItem);
          const subStats = fs.statSync(subItemPath);

          if (
            subStats.isFile() &&
            path.extname(subItem).toLowerCase() === ".md"
          ) {
            const title = extractHeading1FromMarkdown(subItemPath);
            result[item].push({
              filename: subItem,
              title: title,
            });
          }
        }
      }
    }

    return result;
  } catch (error) {
    console.error("디렉토리 스캔 중 오류 발생:", error);
    return {};
  }
}

function generateMarkdown(structure) {
  let markdown = `# ✏️ Today I Learned

> 언젠가 사라지는 주기억장치를 위한 보조기억장치

`;

  for (const [directory, files] of Object.entries(structure)) {
    if (files.length === 0) continue;

    markdown += `## ${directory}\n`;

    for (const file of files) {
      markdown += `- [${file.title}](./${directory}/${file.filename})\n`;
    }

    markdown += "\n";
  }

  return markdown;
}

const rootDir = "./";
const outputFile = "README.md";

const structure = scanDirectory(rootDir);
const markdown = generateMarkdown(structure);

try {
  fs.writeFileSync(outputFile, markdown);
  console.log(`마크다운이 성공적으로 생성되었습니다: ${outputFile}`);
} catch (error) {
  console.error("마크다운 파일 저장 중 오류 발생:", error);
}
