import math
import os
import random
import re
import sys


def libraryFine(d1, m1, y1, d2, m2, y2):
    delayed_year = y1 - y2
    delayed_month = m1 - m2
    delayed_day = d1 - d2

    if delayed_year > 0:
        return 10000
    if delayed_year < 0:
        return 0
    if delayed_month > 0:
        return 500 * delayed_month
    if delayed_month < 0:
        return 0
    if delayed_day > 0:
        return 15 * delayed_day
    return 0

if __name__ == '__main__':
    # d1 = 14
    # m1 = 7
    # y1 = 2018
    # d2 = 5
    # m2 = 7
    # y2 = 2018

    # d1 = 9
    # m1 = 6
    # y1 = 2015
    # d2 = 6
    # m2 = 6
    # y2 = 2015

    # d1 = 30
    # m1 = 1
    # y1 = 2000
    # d2 = 28
    # m2 = 2
    # y2 = 2000

    d1 = 28
    m1 = 2
    y1 = 1999
    d2 = 27
    m2 = 2
    y2 = 2000
    result = libraryFine(d1, m1, y1, d2, m2, y2)
    print(result)
