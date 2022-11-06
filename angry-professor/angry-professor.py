import math
import os
import random
import re
import sys

#
# Complete the 'angryProfessor' function below.
#
# The function is expected to return a STRING.
# The function accepts following parameters:
#  1. INTEGER k
#  2. INTEGER_ARRAY a
#

def angryProfessor(k, a):
    min_index_arrival_time = k-1
    a.sort()

    if(a[min_index_arrival_time] > 0):
        return 'YES'
    return 'NO'


if __name__ == '__main__':
    k = 3
    a = [-2, -1, 0, 1, 2]

    result = angryProfessor(k, a)
    print(f'Is the class cancelled? {result}')
