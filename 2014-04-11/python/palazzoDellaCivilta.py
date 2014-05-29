#palazzo della civilta
from larcc import *
from pyplasm import *
from pavimenti import buildingFloors
from homework1 import finalModel3D
from homework1 import finalmodelNoFloor

def face2edge(FV):
        edges = AA(sorted)(CAT([TRANS([face[:-1],face[1:]]) for face in FV]))
        return AA(eval)(set(AA(str)(edges)))

def disk2D(p):
	u,v = p
	return [v*COS(u), v*SIN(u)]

obj = OFFSET ([0.5 ,0.99]) ( TEXT ( " VN POPOLO DI POETI DI ARTISTI DI EROI"))
obj2= OFFSET ([0.5 ,0.99]) ( TEXT ( " DI SANTI DI PENSATORI DI SCIENZIATI" ) ) 
obj3= OFFSET ([0.5 ,0.99]) ( TEXT ( " DI NAVIGATORI DI TRASMIGRATORI" ) ) 
dedica = (COLOR(BLACK))(R([2,3])(PI/2)( S([1,2])([.05,.05])(( STRUCT([T(2)([16])(obj),T(2)([8])(obj2),obj3]) ))))

pol0=[[0,0],[0,2.5],[1.3,2.5],[1.3,0]]
pol1=[[0.15,0],[0.15,1.5],[1.15,1.5],[1.15,0]]
pol3=[[0,0],[0,2.5],[0.35,2.5],[0.35,0]]

domain2D = PROD([INTERVALS(PI)(32), INTERVALS(1)(3)])

sezpol0 = JOIN(AA(MK)(pol0))
sezpol1 = JOIN(AA(MK)(pol1))
sezpol2 = T([1,2])([0.65,1.5])(S([1,2])([0.5,0.5])(MAP(disk2D)(domain2D)))
sezpol3 = R([2,3])(PI/2)(PROD([JOIN(AA(MK)(pol3)),Q(0.35)]))
sezarco_temp = DIFFERENCE([sezpol0,sezpol1])
sezarco = DIFFERENCE([sezarco_temp,sezpol2])
sezarco3D = R([2,3])(PI/2)(PROD([sezarco, Q(0.35)]))


#Finestra degli archi interni
#Vertici finestra
V = [[0,0],[(1.3/3),0],[(2*1.3/3),0],[1.3,0],
	 [0,2.5/3],[(1.3/3),(2.5/3)], [(2*1.3/3),(2.5/3)], [1.3,(2.5/3)],
	 [0,(2*2.5/3)],[(1.3/3),(2*2.5/3)], [(2*1.3/3),(2*2.5/3)], [1.3,(2*2.5/3)],
	 [0,2.5],[(1.3/3),2.5],[(2*1.3/3),2.5],[1.3,2.5],
	]

#celle finestra
FV = [[0,1,5,4,0],[1,2,6,5,1],[2,3,7,6,2],
	  [4,5,9,8,4],[5,6,10,9,5],[6,7,11,10,6],
	  [8,9,13,12,8],[9,10,14,13,9],[10,11,15,14,10]]

window = S([1,3])([0.98,.98])(R([2,3])(PI/2)( (COLOR(CYAN))(EXPLODE(1.02,1.02,1.02)(MKPOLS((V,FV))))))
arcoFinestra = STRUCT([window,sezarco3D])

#archi interni con finestre
sezarchi3D=STRUCT([arcoFinestra,T([1])([1.3])]*7)
sezpiano3D=STRUCT([sezpol3,T([1])([0.35]),sezarchi3D,T([1])([1.3*7]),sezpol3])

north= T(2)(0.35)(STRUCT([sezpiano3D,T([3])([2.5])]*6))
south= (T([1,2])([0.35*2+1.3*7,0.35*2+1.3*7])(R([1,2])(PI)(north)))
west =  T([2])([0.35*2+1.3*7])(R([1, 2])(-PI/2)(north))
east= T([1])([0.35*2+1.3*7])(R([1, 2])(PI/2)(north))
internalBuilding = T([1,2,3])([1.3,1.3,0.5])(STRUCT([north,south,east,west]))

#tetto
tetto= T([1,2,3])([1.3+0.35,1.3+.35,2.5*6])(CUBOID([1.3*7, 1.3*7,3.5]))
verticalEnclosures= (STRUCT([internalBuilding,finalmodelNoFloor]))

colosseo = T([3])([0.4*12])(STRUCT([internalBuilding, finalModel3D, buildingFloors,tetto,T([1,3])([2,2.5*6+.7])(dedica)]))

#creazione base
baseTemp= (CUBOID([0.35*2+1.3*9+1.3*4,0.35*2+1.3*9+1.3*5,0.4*12]))
muroTemp= CUBOID([1.3+0.35,0.5*12,0.4*12])
muri = T(2)(-0.5*12)(STRUCT([muroTemp,T(1)(1.3*12+0.35)]*2))
stepTemp=CUBOID([1.3*12,1,0.4])
stair_temp= STRUCT([	stepTemp,	T([2,3])([0.5,0.4])		]*12)
base=(STRUCT([T([1,2])([1.3,-0.5*12])(stair_temp),muri,baseTemp]))
colosseoConBase= (STRUCT([T([1,2])([1.3*2,1.3*2])(colosseo),base]))
VIEW(colosseoConBase)