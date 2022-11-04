import math
import os
import random
import re
import sys

#
# Complete the 'utopianTree' function below.
#
# The function is expected to return an INTEGER.
# The function accepts INTEGER n as parameter.
#

def utopianTree(n):
    current_h = 1
    if n == 0:
        return current_h
    else:
        for i in range(n+1):
            if i > 0:
                if (i%2 == 0):
                    current_h += 1
                else:
                    current_h = current_h*2
    
    return current_h

if __name__ == '__main__':
    t = 1
    n = 5

    result = utopianTree(n)

    print(f'Utopian Tree height is: {result}m')


