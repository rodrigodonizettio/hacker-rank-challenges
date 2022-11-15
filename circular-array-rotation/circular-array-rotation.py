import math
import os
import random
import re
import sys

#
# Complete the 'circularArrayRotation' function below.
#
# The function is expected to return an INTEGER_ARRAY.
# The function accepts following parameters:
#  1. INTEGER_ARRAY a
#  2. INTEGER k
#  3. INTEGER_ARRAY queries
#

def circularArrayRotation(a, k, queries):
    num_right_steps = k%len(a)
    result = []

    for query in queries:
        if(num_right_steps == 0):
            result.append(a[query])
        else:
            result.append(a[query-num_right_steps])
    return result


if __name__ == '__main__':
    k = 2
    a = [1, 2, 3]
    queries = [0, 1, 2]

    result = circularArrayRotation(a, k, queries)
    print(f'Result is {result}')
