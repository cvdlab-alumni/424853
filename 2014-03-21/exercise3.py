from pyplasm import *


def disk2D(p):
	u,v = p
	return [v*COS(u), v*SIN(u)]

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

domain2D = PROD([INTERVALS(PI)(32), INTERVALS(1)(3)]) # 2D domain decompos

pol0=[[0,0],[0,2.5],[1.3,2.5],[1.3,0]]
pol1=[[0.15,0],[0.15,1.5],[1.15,1.5],[1.15,0]]
pol3=[[0,0],[0,2.5],[0.35,2.5],[0.35,0]]

sezpol0 = JOIN(AA(MK)(pol0))
sezpol1 = JOIN(AA(MK)(pol1))
sezpol2 = T([1,2])([0.65,1.5])(S([1,2])([0.5,0.5])(MAP(disk2D)(domain2D)))
sezpol3 = JOIN(AA(MK)(pol3))
sezarco_temp = DIFFERENCE([sezpol0,sezpol1])
sezarco = DIFFERENCE([sezarco_temp,sezpol2])
sezarchi=STRUCT([sezarco,T([1])([1.3])]*9)
sezpiano=STRUCT([sezpol3,T([1])([0.35]),sezarchi,T([1])([1.3*9]),sezpol3])

north= STRUCT([sezpiano,T([2])([2.5])]*6)
south= T([3])([0.35*2+1.3*9])(north)
east =  R([1, 3])(PI/2)(north)
west= T([1])([0.35*2+1.3*9])(east)

mock_up_3d=STRUCT([building,north,south,east,west])

#VIEW(mock_up_3d)
#MODELLO 3D
sezpolfloor2_3D= R([2,3])(PI/2)(PROD([sezpolfloor1,Q(0.5)]))
sezpolstair4_3D = R([2,3])(PI/2)(PROD([sezpolstair3,Q(0.5)]))

floor0_3D = sezpolfloor2_3D
floor1_3D = T([2])([2.5])(sezpolstair4_3D)
floor2_3D = T([2])([2.5*2])(sezpolstair4_3D)
floor3_3D = T([2])([2.5*3])(sezpolstair4_3D)
floor4_3D = T([2])([2.5*4])(sezpolstair4_3D)
floor5_3D = T([2])([2.5*5])(sezpolstair4_3D)
floor6_3D = T([2])([2.5*6])(sezpolfloor2_3D)


north3D = PROD([north, Q(0.35)])
south3D = T([3])([0.35+1.3*9])(north3D)
east3D =  T([1])([0.35])(R([1, 3])(PI/2)(north3D))
west3D = T([1])([0.35+1.3*9])(east3D)
#solid_model_3D = STRUCT([north3D,south3D,east3D,west3D, COLOR(RED)(south), COLOR(RED)(north), COLOR(RED)(east), COLOR(RED)(west)]) 
#solid_model_3D = STRUCT([floor0_3D, COLOR(RED)(floor0), floor1_3D, COLOR(RED)(floor1), floor2_3D, COLOR(RED)(floor2),floor3_3D, COLOR(RED)(floor3),floor4_3D, COLOR(RED)(floor4),floor5_3D, COLOR(RED)(floor5),floor6_3D, COLOR(RED)(floor6)]) 

solid_model_3D= STRUCT([north3D,south3D,east3D,west3D, floor0_3D, floor1_3D, floor2_3D, floor3_3D,floor4_3D,floor5_3D,floor6_3D])

VIEW(solid_model_3D)


