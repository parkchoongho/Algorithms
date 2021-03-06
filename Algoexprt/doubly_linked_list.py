from abc import abstractmethod


class NoSuchElementException(Exception):
    pass


class WrongIndex(Exception):
    pass


class Node:
    def __init__(self, value):
        self.value = value
        self.prev = None
        self.next = None


class DoublyLinkedListInterface:
    @abstractmethod
    def add_first(self, node: Node) -> None:
        pass

    @abstractmethod
    def add_last(self, node: Node) -> None:
        pass

    @abstractmethod
    def remove_first(self) -> Node:
        pass

    @abstractmethod
    def remove_last(self) -> Node:
        pass

    @abstractmethod
    def search(self, index) -> Node:
        pass

    @abstractmethod
    def insert(self, index, node) -> None:
        pass

    @abstractmethod
    def remove(self, index) -> Node:
        pass


class DoublyLinkedList(DoublyLinkedListInterface):
    def __init__(self):
        self.head = None
        self.tail = None
        self.size = 0

    def add_first(self, node: Node) -> None:
        self.size += 1
        if self.head is None:
            self.head = node
            self.tail = node
            return
        self.head.prev = node
        node.next = self.head
        self.head = node
        return

    def add_last(self, node: Node) -> None:
        self.size += 1
        if self.head is None:
            self.head = node
            self.tail = node
            return
        self.tail.next = node
        node.prev = self.tail
        self.tail = node
        return

    def remove_first(self) -> Node:
        if self.head is None:
            raise NoSuchElementException()
        self.size -= 1
        if self.head.next is None:
            node = self.head
            self.head = None
            self.tail = None
            return node
        node = self.head
        self.head = node.next
        node.next.prev = None
        node.next = None
        return node

    def remove_last(self) -> Node:
        if self.head is None:
            raise NoSuchElementException()
        self.size -= 1
        if self.head.next is None:
            node = self.tail
            self.head = None
            self.tail = None
            return node
        node = self.tail
        self.tail = node.prev
        node.prev.next = None
        node.prev = None
        return node

    def search(self, index) -> Node:
        if index <= 0 or index > self.size:
            raise WrongIndex()
        if index <= (self.size / 2):
            count = 1
            node = self.head
            while count != index:
                count += 1
                node = node.next
            return node
        if index > (self.size / 2):
            count = self.size
            node = self.tail
            while count != index:
                count -= 1
                node = node.prev
            return node

    def insert(self, index, node) -> None:
        if index <= 0 or index > self.size:
            raise WrongIndex()
        if index == 1:
            self.add_first(node)
            return
        found_node = self.search(index)
        prev_node = found_node.prev
        prev_node.next = node
        found_node.prev = node
        node.prev = prev_node
        node.next = found_node
        self.size += 1
        return

    def remove(self, index) -> Node:
        if index <= 0 or index > self.size:
            raise WrongIndex()
        node = self.search(index)
        if node.prev is None:
            return self.remove_first()
        if node.next is None:
            return self.remove_last()
        next_node = node.next
        prev_node = node.prev
        next_node.prev = prev_node
        prev_node.next = next_node
        node.next = None
        node.prev = None
        self.size -= 1
        return Node

    def __str__(self):
        node = self.head
        result = "None "
        while node is not None:
            result += "<- "
            result += str(node.value)
            result += " -> "
            node = node.next
        result += "None"
        return result


node1 = Node(1)
node2 = Node(2)
node3 = Node(3)

linked_list = DoublyLinkedList()

linked_list.add_first(node1)
linked_list.insert(1, node2)

print(linked_list)
