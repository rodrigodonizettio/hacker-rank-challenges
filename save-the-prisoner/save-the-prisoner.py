import math
import os
import random
import re
import sys

#
# Complete the 'saveThePrisoner' function below.
#
# The function is expected to return an INTEGER.
# The function accepts following parameters:
#  1. INTEGER n
#  2. INTEGER m
#  3. INTEGER s

def saveThePrisoner(n, m, s):
    total = m+(s-1)
    rest = total%n

    if rest == 0:
        return n
    else:
        return rest


if __name__ == '__main__':
    n = 7
    m = 19
    s = 2

    result = saveThePrisoner(n, m, s)
    print(f'The awful candy piece will be given to prisoner at chair {result}')
