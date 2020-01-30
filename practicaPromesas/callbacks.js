const kodemia = {
    enterview:false,
    inscription:false,
    assistance:false
}

function enterviewKodemia (visit, callback){
    visit.enterview = true
    const error = visit.enterview ? false : true
    callback(error, visit)
}

function inscriptKodemia (inscript, callback){
    inscript.inscription = true
    const error = inscript.inscription ? false : true
    callback(error, inscript)
}

function assistKodemia (assist, callback){
    assist.assistance = true
    const error = assist.assistance ? false : true
    callback(error, assist)
}

enterviewKodemia(kodemia, (error,entrevistado) =>{
    if (error) {
        console.log('Llamamastarde')
        return
    }
    inscriptKodemia(entrevistado, (error,inscrito) => {
        if (error) {
            console.log('Llamamastardex2')
            return
        }
        assistKodemia(inscrito, (error,asistencia) =>{
            if (error) {
                console.log('Llamamastardex3')
                return
            }
            console.log('Done')
            console.log(asistencia)
        })
    })
})