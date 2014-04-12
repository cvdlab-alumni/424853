#excercise 1
#Rispetto al primo homework ho introdotto le arcate interne dell edificio della civilta' italiana,
#la dedica sul fronte dell'edificio, il tetto.
#
from larcc import *
from pyplasm import *
from pavimenti import buildingFloors
from homework1 import finalModel3D

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




#archi interni con finestre
sezarchi3D=STRUCT([sezarco3D,T([1])([1.3])]*7)
sezpiano3D=STRUCT([sezpol3,T([1])([0.35]),sezarchi3D,T([1])([1.3*7]),sezpol3])

north= T(2)(0.35)(STRUCT([sezpiano3D,T([3])([2.5])]*6))
south= T([2])([0.35+1.3*7])(north)
east =  T(1)(0.35)(R([1, 2])(PI/2)(north))
west= T([1])([0.35+1.3*7])(east)
internalBuilding = T([1,2,3])([1.3,1.3,0.5])(STRUCT([north,south,east,west]))

#tetto
tetto= T([1,2,3])([1.3+0.35,1.3+.35,2.5*6])(CUBOID([1.3*7, 1.3*7,3.5]))
colosseo = (STRUCT([internalBuilding, finalModel3D, buildingFloors,tetto,T([1,3])([2,2.5*6+.7])(dedica)]))
VIEW(buildingFloors)
VIEW(colosseo)