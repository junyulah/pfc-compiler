module.exports={"GOTO":[{"PROGRAM":7,"EXPRESSION":8},{},{},{},{},{},{},{},{},{"EXPRESSION":17,"EXP_LIST":18},{},{},{},{},{},{},{},{},{},{"EXPRESSION":17,"EXP_LIST":23},{"EXPRESSION":17,"EXP_LIST":24},{},{},{},{},{}],"ACTION":[{"variable":{"type":"shift","state":1},"true":{"type":"shift","state":2},"false":{"type":"shift","state":3},"null":{"type":"shift","state":4},"string":{"type":"shift","state":5},"number":{"type":"shift","state":6}},{"$":{"type":"reduce","production":["EXPRESSION",["variable"]]},"(":{"type":"shift","state":9}},{"$":{"type":"reduce","production":["EXPRESSION",["true"]]}},{"$":{"type":"reduce","production":["EXPRESSION",["false"]]}},{"$":{"type":"reduce","production":["EXPRESSION",["null"]]}},{"$":{"type":"reduce","production":["EXPRESSION",["string"]]}},{"$":{"type":"reduce","production":["EXPRESSION",["number"]]}},{"$":{"type":"accept"}},{"$":{"type":"reduce","production":["PROGRAM",["EXPRESSION"]]}},{")":{"type":"shift","state":16},"variable":{"type":"shift","state":10},"true":{"type":"shift","state":11},"false":{"type":"shift","state":12},"null":{"type":"shift","state":13},"string":{"type":"shift","state":14},"number":{"type":"shift","state":15}},{")":{"type":"reduce","production":["EXPRESSION",["variable"]]},",":{"type":"reduce","production":["EXPRESSION",["variable"]]},"(":{"type":"shift","state":19}},{")":{"type":"reduce","production":["EXPRESSION",["true"]]},",":{"type":"reduce","production":["EXPRESSION",["true"]]}},{")":{"type":"reduce","production":["EXPRESSION",["false"]]},",":{"type":"reduce","production":["EXPRESSION",["false"]]}},{")":{"type":"reduce","production":["EXPRESSION",["null"]]},",":{"type":"reduce","production":["EXPRESSION",["null"]]}},{")":{"type":"reduce","production":["EXPRESSION",["string"]]},",":{"type":"reduce","production":["EXPRESSION",["string"]]}},{")":{"type":"reduce","production":["EXPRESSION",["number"]]},",":{"type":"reduce","production":["EXPRESSION",["number"]]}},{"$":{"type":"reduce","production":["EXPRESSION",["variable","(",")"]]}},{")":{"type":"reduce","production":["EXP_LIST",["EXPRESSION"]]},",":{"type":"shift","state":20}},{")":{"type":"shift","state":21}},{")":{"type":"shift","state":22},"variable":{"type":"shift","state":10},"true":{"type":"shift","state":11},"false":{"type":"shift","state":12},"null":{"type":"shift","state":13},"string":{"type":"shift","state":14},"number":{"type":"shift","state":15}},{"variable":{"type":"shift","state":10},"true":{"type":"shift","state":11},"false":{"type":"shift","state":12},"null":{"type":"shift","state":13},"string":{"type":"shift","state":14},"number":{"type":"shift","state":15}},{"$":{"type":"reduce","production":["EXPRESSION",["variable","(","EXP_LIST",")"]]}},{")":{"type":"reduce","production":["EXPRESSION",["variable","(",")"]]},",":{"type":"reduce","production":["EXPRESSION",["variable","(",")"]]}},{")":{"type":"shift","state":25}},{")":{"type":"reduce","production":["EXP_LIST",["EXPRESSION",",","EXP_LIST"]]}},{")":{"type":"reduce","production":["EXPRESSION",["variable","(","EXP_LIST",")"]]},",":{"type":"reduce","production":["EXPRESSION",["variable","(","EXP_LIST",")"]]}}]}