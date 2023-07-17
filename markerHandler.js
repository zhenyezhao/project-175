AFRAME .registerComponent(markerhandler,{
    init:function(){
        markerFound.setAttribute("modelist",visible= true)
        if(markerLost[visible=false]){
            findIndex.setAttribute(visible=false)
        }
        splice()
    },
    getDistance:function(){
        return elA.object3D.position.diatanceTo(elB.object3D.position);
        return elA.object3D.position.diatanceTo(elC.object3D.position);
    },
    getModelGeometry:function(models,modelName){
        var barcodes=Objects.keys(models);
        for(var barcode of barcodes){
            if (models[barcode].model_name===modelName){
                return{
                    position:models[barcode]["placement_position"],
                    rotation:models[barcode]["placement_rotation"],
                    scale:models[barcode]["placement_scale"],
                    model_url:models[barcode]["placement_model_url"],
                }
            }
        }
    },
})  isModelPresentInArray:function(arr:val){
    for(var i is arr){
        
    }
    }