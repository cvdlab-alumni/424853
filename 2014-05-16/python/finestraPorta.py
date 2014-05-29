"""finestra"""
from larcc import *
def trasparenza(oggetto):
    return MATERIAL([1,1,1,0.1, 0,0,0.8,0.5, 1,1,1,0.1, 1,1,1,0.1, 100])(oggetto)
celeste = [0,0,255]
rosso = [128,0,0]
colorPorta = [0.8,0.4666666,0.13333333]
DRAW = COMP([VIEW,STRUCT,MKPOLS])
portaDiagram = assemblyDiagramInit([3,1,5])([[.2,1.7,.1],[.2],[.1,1,.2,1.,.1]])
V,CV = portaDiagram
hpc = SKEL_1(STRUCT(MKPOLS(portaDiagram)))
hpc = cellNumbering (portaDiagram,hpc)(range(len(CV)),GREEN,2)
#VIEW(hpc) 
toRemove = [6,8]
portaDiagram = V,[cell for k,cell in enumerate(CV) if not (k in toRemove)]

vetro=(T([1,3])([.2,.1])(trasparenza(CUBOID([1.7,.2,1]))))
vetri = STRUCT([vetro,T([3])([1.2])]*2)
lastraLegno = T([1,3])([.2,.1])(COLOR([0.8,0.6666666,0.23333333])(CUBOID([1.7,.2,1])))
lastreLegno =  STRUCT([lastraLegno,T([3])([1.2])]*2)
portaDiagram = STRUCT(MKPOLS(portaDiagram))


"""*******"""
doorBalcony = STRUCT([COLOR(GREEN)(portaDiagram),vetri]) 
"""*******"""
doorInside = STRUCT([COLOR(colorPorta)(portaDiagram),lastreLegno])
"""*******"""
#VIEW(doorBalcony)
