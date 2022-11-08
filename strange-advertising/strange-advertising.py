import math
import os
import random
import re
import sys

#
# Complete the 'viralAdvertising' function below.
#
# The function is expected to return an INTEGER.
# The function accepts INTEGER n as parameter.
#

def viralAdvertising(n):
    shared = 5
    liked = 2
    acc = 2
    
    if n == 1:
        return acc
    
    for day in range(2, n+1):
        shared = (shared // 2) * 3
        liked = (shared // 2)
        acc = liked + acc

    return acc


if __name__ == '__main__':
    n = 5

    result = viralAdvertising(n)
    print(f'Cumulative number of shared people: {result}')
