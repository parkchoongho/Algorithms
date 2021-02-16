class Node():
    def __init__(self, val):
        self.val = val
        self.next = None

class LinkedList():
    def __init__(self):
        self.head = None

    def append(self, val):
        new_node = Node(val)
        if self.head == None:
            self.head = new_node
        else:
            current_node = self.head
            while current_node.next != None:
                current_node = current_node.next
            current_node.next = new_node

    def delete(self, data):
        current_node = self.head
        prev_node = self.head
        next_node = self.head
        while current_node.next != None:
            if current_node == self.head:
                current_node = current_node.next
                next_node = current_node.next
                continue
            prev_node = current_node
            current_node = next_node
            next_node = next_node.next



    def __str__(self):
        current_node = self.head
        output = "{"
        output += str(current_node.val)
        while current_node.next != None:
            current_node = current_node.next
            output += " -> "
            output += str(current_node.val)
        output += "}"
        return output

linked_list = LinkedList()

linked_list.append(2)
linked_list.append(1)
linked_list.append(27)
linked_list.append(30)

print(linked_list)

