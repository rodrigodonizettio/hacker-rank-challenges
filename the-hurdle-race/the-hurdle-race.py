import math
import os
import random
import re
import sys

#
# Complete the 'hurdleRace' function below.
#
# The function is expected to return an INTEGER.
# The function accepts following parameters:
#  1. INTEGER k
#  2. INTEGER_ARRAY height
#

def hurdleRace(k, height):
    height.sort()
    max_hurdle_height = height[-1]
    if k >= max_hurdle_height:
        return 0
    return max_hurdle_height - k

if __name__ == '__main__':
    n = 3
    k = 99

    height = [100, 0, 0]

    result = hurdleRace(k, height)
    print(f'Max Number of Potions required is: {result}')
