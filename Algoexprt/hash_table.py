class HashTabel():
    def __init__(self, size):
        self.size = size
        self.hash_list = [[] for i in range(size)]
    def insert(self, value):
        index = value % self.size
        self.hash_list[index].append(value)
        pass
    def find(self, value):
        index = value % self.size
        for i in self.hash_list[index]:
            if value == i:
                return True
        return False

