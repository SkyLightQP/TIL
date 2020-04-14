# 9663 N-Queen

> https://www.acmicpc.net/problem/9663

백트래킹을 사용하는 대표적인 문제이다.

문제 내용 그대로 체스판 위에서 퀸 N개를 서로 공격할 수 없게 놓는 방법이 몇가지인지 구하면 된다. 체스 규칙을 잘 몰라 찾아봤는데 **가로, 세로, 대각선(\, /)** 으로 만나지 않으면 된다.

DFS, BFS가 모든 정점을 방문해 탐색한다면 백트레킹은 조건에 만족하지 않는 정점은 거르고 방문한다.

위에서 말한 만나지 않는 조건을 이용하여 DFS를 구현하면 된다.

```cpp
#include <iostream>

using namespace std;

int N;
int result = 0;
int graph[15] = {};

void backtracking(int start) {
    for(int i = 0; i < start; i++) {
        if(graph[start] == graph[i] || abs(graph[start] - graph[i]) == abs(start - i)) return;
		// 같은 x, y축 OR 대각선(\, /)
    }

    for(int i = 0; i < N; i++) {
        graph[start + 1] = i;
        backtracking(start + 1);
    }

    if(start + 1 == N) result++;
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);

    cin >> N;

    for(int i = 0; i < N; i++) {
        graph[0] = i;
        backtracking(0);
    }

    cout << result;

    return 0;
}
```

- 2020 / 01 / 23