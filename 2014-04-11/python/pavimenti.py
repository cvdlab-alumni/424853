#pavimenti
from pyplasm import *

polfloor=[[0,0],[0,0.35*2+1.3*9],[0.35*2+1.3*9,0.35*2+1.3*9],[0.35*2+1.3*9,0]]
polstair=[[0,0],[0,1.3/2],[1.3/2,1.3/2],[1.3/2,0]]

sezpolfloor1 = JOIN(AA(MK)(polfloor))
sezpolfloor2 = R([2,3])(PI/2)(sezpolfloor1)
sezpolstair1 = JOIN(AA(MK)(polstair))
sezpolstair2 = STRUCT([sezpolstair1,T([1])([1.3])(sezpolstair1),T([2])([1.3/2])(sezpolstair1), T([1,2])([1.3/2,1.3/2])(sezpolstair1),T([1,2])([1.3,1.3/2])(sezpolstair1), T([2])([-(1.3+1.3/2)])(sezpolstair1), T([1,2])([1.3,-(3*1.3/2)])(sezpolstair1),T([2])([-1.3*2])(sezpolstair1),T([1,2])([1.3/2,-1.3*2])(sezpolstair1),T([1,2])([1.3,-1.3*2])(sezpolstair1)])
sezpolstair3 = DIFFERENCE([sezpolfloor1,T([1,2])([1.3*5,1.3*5])(sezpolstair2)])
sezpolstair4 = R([2,3])(PI/2)(sezpolstair3)

sezBaseFloorTemp= PROD([sezpolfloor1,Q(0.5)])
#VIEW(STRUCT([sezBaseFloorTemp]))
sezBaseFloor= PROD([sezpolfloor1,Q(0.5)])
sezIntermediateFloor = PROD([sezpolstair3,Q(0.5)])

floor0_3D = sezBaseFloor
floor1_3D = T([3])([2.5])(sezIntermediateFloor)
floor2_3D = T([3])([2.5*2])(sezIntermediateFloor)
floor3_3D = T([3])([2.5*3])(sezIntermediateFloor)
floor4_3D = T([3])([2.5*4])(sezIntermediateFloor)
floor5_3D = T([3])([2.5*5])(sezIntermediateFloor)
floor6_3D = T([3])([2.5*6])(sezBaseFloor)

#building=STRUCT([floor0,floor1,floor2,floor3,floor4,floor5,floor6])
#buildingFloors=STRUCT([COLOR(GREEN)(floor0_3D),COLOR(YELLOW)(floor1_3D),COLOR(BLUE)(floor2_3D),COLOR(BLACK)(floor3_3D),COLOR(CYAN)(floor4_3D),COLOR(MAGENTA)(floor5_3D),COLOR(RED)(floor6_3D)])
buildingFloors=STRUCT([floor0_3D,floor1_3D,floor2_3D,floor3_3D,floor4_3D,floor5_3D,floor6_3D])

#VIEW(buildingFloors)