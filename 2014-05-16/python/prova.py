from larcc import *
controlpoints = [[20,0],[22,0],[24,0],[26,-1],[28,-4],[29,-7],[30,-10]]
dom = larDomain([64])
mapping = larBezierCurve(controlpoints)
obj = larMap(mapping)(dom)
curva = STRUCT(MKPOLS(obj))
hill = STRUCT([curva,S(1)(-1)(curva),POLYLINE([[-20,0],[20,0]]),POLYLINE([[-30,-10],[30,-10]])])
hill2D = T(1)(-1.3)(MAP([S3,S1,S2])((PROD([SOLIDIFY(hill),Q(3)]))))
hill2D = COLOR([0.002,0.743,0.224])(hill2D)
hill3D = T(3)(-0.1)(STRUCT(NN(36)([hill2D,R([1,2])(PI/36)])))
hillProva = STRUCT(NN(36)([hill2D,R([1,2])(PI/36)]))
VIEW(hillProva)