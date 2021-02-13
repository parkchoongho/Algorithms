import numpy as np


class Dict():
    def __init__(self):
        self.list = np.ones((10000000, ), dtype=int)
#    def __hash__(self, value):
    def __hash__(self, arg):
        index = 0
        for i in arg:
            index += ord(i)
        return index

    def __setitem__(self, a, c):
        index = self.__hash__(a)
        self.list[index] = c

    def __getitem__(self, a):
        index = self.__hash__(a)
        return self.list[index]

dict = Dict()

dict["s"] = 1

print(dict["s"])

