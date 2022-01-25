/*
A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

a2 + b2 = c2
For example, 32 + 42 = 9 + 16 = 25 = 52.

There exists exactly one Pythagorean triplet for which a + b + c = 1000.
Find the product abc.
*/

#include <iostream>
#include <math.h>
using namespace std;
int main()
{
    //O(N^3)
    // for (int c = 1; c < 1000; c++)
    // {
    //     for (int b = 1; b < 1000; b++)
    //     {
    //         for (int a = 1; a < 1000; a++)
    //         {
    //             if ((a * a) + (b * b) == c * c)
    //             {
    //                 if (a + b + c == 1000)
    //                     cout << "a: " << a << " b: " << b << " c: " << a * b * c << endl;
    //             }
    //         }
    //     }
    //

    //O(N)
    int n = 1000;
    for (int c = floor(n / 3 + 1); c < n / 2; c++)
    {
        int sqa_b = c * c - n * n + 2 * n * c;
        int a_b = floor(sqrt(sqa_b));

        if (a_b * a_b == sqa_b)
        {
            int b = (n - c + a_b) / 2;
            int a = n - b - c;
            cout << a * b * c << endl;
        }
    }
}
