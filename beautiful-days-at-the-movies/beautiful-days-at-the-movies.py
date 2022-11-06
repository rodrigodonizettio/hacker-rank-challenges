import math
import os
import random
import re
import sys

#
# Complete the 'beautifulDays' function below.
#
# The function is expected to return an INTEGER.
# The function accepts following parameters:
#  1. INTEGER i
#  2. INTEGER j
#  3. INTEGER k
#

def beautifulDays(i, j, k):
    beautiful_days_count = 0
    for day in range(i, j+1):
        day_rev = int(str(day)[::-1]) # String Slicing and Reverse
        if (abs(day - day_rev) % k) == 0:
            beautiful_days_count += 1
    
    return beautiful_days_count


if __name__ == '__main__':
    i = 20
    j = 23
    k = 6

    result = beautifulDays(i, j, k)
    print(f'Number of Beautiful Days: {result}')
