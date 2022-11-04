import math
import os
import random
import re
import sys
import string

#
# Complete the 'designerPdfViewer' function below.
#
# The function is expected to return an INTEGER.
# The function accepts following parameters:
#  1. INTEGER_ARRAY h
#  2. STRING word
#

def designerPdfViewer(h, word):
    '''
    max_h = 0

    for l in word:
        char_index = string.ascii_lowercase.index(l)
        current_l_h = h[char_index]
        if current_l_h > max_h:
            max_h = current_l_h

    return len(word) * max_h
    '''

    char_h_dict = {
        'a': h[0], 'b': h[1], 'c': h[2], 'd': h[3], 'e': h[4], 'f': h[5], 'g': h[6], 'h': h[7], 
        'i': h[8], 'j': h[9], 'k': h[10], 'l': h[11], 'm': h[12], 'n': h[13], 'o': h[14], 'p': h[15], 
        'q': h[16], 'r': h[17], 's': h[18], 't': h[19], 'u': h[20], 'v': h[21], 'w': h[22], 'x': h[23], 
        'y': h[24], 'z': h[25]
    }

    max_h = 0

    for l in word:
        current_l_h = char_h_dict[l]
        if current_l_h > max_h:
            max_h = current_l_h
    
    return len(word) * max_h

if __name__ == '__main__':
    h = [1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 7]
    word = 'zaba'

    result = designerPdfViewer(h, word)

    print(f'Selection rectangle area is: {result} mm2')
