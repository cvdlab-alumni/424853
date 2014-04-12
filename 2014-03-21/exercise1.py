from pyplasm import *


polfloor=[[0,0],[0,0.35*2+1.3*9],[0.35*2+1.3*9,0.35*2+1.3*9],[0.35*2+1.3*9,0]]
polstair=[[0,0],[0,1.3/2],[1.3/2,1.3/2],[1.3/2,0]]

sezpolfloor1 = JOIN(AA(MK)(polfloor))
sezpolfloor2 = R([2,3])(PI/2)(sezpolfloor1)
sezpolstair1 = JOIN(AA(MK)(polstair))
sezpolstair2 = STRUCT([sezpolstair1,T([1])([1.3])(sezpolstair1),T([2])([1.3/2])(sezpolstair1), T([1,2])([1.3/2,1.3/2])(sezpolstair1),T([1,2])([1.3,1.3/2])(sezpolstair1), T([2])([-(1.3+1.3/2)])(sezpolstair1), T([1,2])([1.3,-(3*1.3/2)])(sezpolstair1),T([2])([-1.3*2])(sezpolstair1),T([1,2])([1.3/2,-1.3*2])(sezpolstair1),T([1,2])([1.3,-1.3*2])(sezpolstair1)])
sezpolstair3 = DIFFERENCE([sezpolfloor1,T([1,2])([1.3*5,1.3*5])(sezpolstair2)])
sezpolstair4 = R([2,3])(PI/2)(sezpolstair3)

floor0 = sezpolfloor2
floor1 = T([2])([2.5])(sezpolstair4)
floor2 = T([2])([2.5*2])(sezpolstair4)
floor3 = T([2])([2.5*3])(sezpolstair4)
floor4 = T([2])([2.5*4])(sezpolstair4)
floor5 = T([2])([2.5*5])(sezpolstair4)
floor6 = T([2])([2.5*6])(sezpolfloor2)


#building=STRUCT([floor0,floor1,floor2,floor3,floor4,floor5,floor6])
building=STRUCT([COLOR(GREEN)(floor0),COLOR(YELLOW)(floor1),COLOR(BLUE)(floor2),COLOR(BLACK)(floor3),COLOR(CYAN)(floor4),COLOR(MAGENTA)(floor5),COLOR(RED)(floor6)])


VIEW(building)