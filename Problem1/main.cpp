#include <map>
#include <set>
#include <list>
#include <cmath>
#include <ctime>
#include <deque>
#include <queue>
#include <stack>
#include <string>
#include <bitset>
#include <cstdio>
#include <limits>
#include <vector>
#include <climits>
#include <cstring>
#include <cstdlib>
#include <fstream>
#include <numeric>
#include <sstream>
#include <iostream>
#include <algorithm>
#include <unordered_map>

using namespace std;

/*
https://projecteuler.net/overview=001

Let’s look at the details of our function and take as example n=3. We would have to add: 3+6+9+12+......+999=3*(1+2+3+4+...+333)
For n=5 we would get:
5+10+15+...+995=5*(1+2+....+199)
Now note that 199=995/5 but also 999/5 rounded down to the nearest integer.
In many programming languages there exists a separate operator for that: div or \. If we now also note that 1+2+3+...+p=1⁄2*p*(p+1) our program becomes:

*/

long long SumDivisibleBy(long target, long n)
{
    long p = target / n;
    long long a = n * (p * (p + 1)) / 2;
    return a;
}

int main()
{
    long t;
    cin >> t;
    for (long a0 = 0; a0 < t; a0++)
    {
        long n;
        cin >> n;
        cout << SumDivisibleBy(n - 1, 3) + SumDivisibleBy(n - 1, 5) - SumDivisibleBy(n - 1, 15) << endl;
    }
    return 0;
}
