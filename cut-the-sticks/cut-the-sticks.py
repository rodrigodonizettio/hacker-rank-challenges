import math
import os
import random
import re
import sys


def cutTheSticks(arr):
    result = []

    while len(arr) > 0:
            result.append(len(arr))
            arr.sort()
            arr_first = arr[0]
            print('Arr First:', arr_first)
            arr = [el for el in arr if el != arr_first] # remove every element with arr_first value
            print('Arr Partial:', arr)
            print('Result Partial:', result)
            print('--------------')
    return result
    

if __name__ == '__main__':
    # arr = [1, 2, 3]
    # arr = [5, 4, 4, 2, 2, 8]
    arr = [1, 2, 3, 4, 3, 3, 2, 1]

    result = cutTheSticks(arr)
    print(result)
