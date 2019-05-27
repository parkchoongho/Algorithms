# DataStructures

### 1) Arrays

Collection of items of single type

It's not usual for arrays to have multiple types.



### 2) What is Memory?

컴퓨터가 Data를 저장하는 방식은 크게 2가지로 나뉜다.

![](C:\Users\user\Desktop\Project\Algorithms\images\RAM-Storage.JPG)

#### 1- Memory(RAM)

=> Data is not permanent.(If you turn off your laptop, it is gone.)

#### 2- Storage

=> Data is permanent.

### Storage에 있는 파일들은 영구적으로 보관이 가능한데 Data가 영구적이지 않은 RAM은 왜 존재하는 것일까?

왜냐하면 Storage에서 데이터를 읽어오고 쓰는 것이 매우 느리기 때문이다.

![](C:\Users\user\Desktop\Project\Algorithms\images\RAM-Storage2.JPG)

Storage가 책상 서랍이고 memory를 책상에 비유해서 생각하면 쉽다. 책상 서랍에서 필요한 것을 가져와 책상에 놓고 쓰다가 일이 끝나고 변경 사항을 다시 책상서랍에 넣는 것과 파일을 Storage에서 가져와 memory에서 쓰고 다시 Storage에 저장하는 것과 매우 흡사.

![](C:\Users\user\Desktop\Project\Algorithms\images\RAM-Storage3.JPG)

![](C:\Users\user\Desktop\Project\Algorithms\images\Memory.JPG)

Array가 한번 설정되면 그 뒤에 어떤 데이터가 오는지 알수 없으므로 설정된 Array보다 더 많은 데이터가 들어와야할 경우 Array를 다시 설정해야 한다.

![](C:\Users\user\Desktop\Project\Algorithms\images\HandleArray.JPG)