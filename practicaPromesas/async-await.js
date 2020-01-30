const kodemia = {
    enterview: false,
    inscription: false,
    assistance: false
}

function enterviewKodemia (visit, callback) {
    console.log('1')
    visit.enterview = true
    const error = visit.enterview ? false : true
    callback(error, visit)
}

function inscriptKodemia (inscript, callback) {
    console.log('2')
    inscript.inscription = true
    const error = inscript.inscription ? false : true
    callback(error, inscript)
}

function assistKodemia (assist, callback) {
    console.log('3')
    assist.assistance = true
    const error = assist.assistance ? false : true
    callback(error, assist)
}

function enterviewKodemiaPromise (visit) {
    return new Promise ((resolve, reject) => {
        enterviewKodemia(visit, (error, entrevistado) => {
            if (error) return reject(error)
            resolve(entrevistado)
        })
    })
}

function inscriptKodemiaPromise (inscript) {
    return new Promise ((resolve, reject) => {
        inscriptKodemia(inscript, (error, inscrito) => {
            if (error) return reject(error)
            resolve(inscrito)
        })
    })
}

function assistKodemiaPromise (assist) {
    return new Promise ((resolve, reject) => {
        assistKodemia(assist, (error, asistencia) => {
            if (error) return reject(error)
            resolve(asistencia)
        })
    })
}

/* enterviewKodemiaPromise(kodemia)
    .then(entrevistado => {
        inscriptKodemiaPromise(entrevistado)
            .then(inscrito => {
                assistKodemiaPromise(inscrito)
                    .then(asistencia => {
                        console.log('DONE', asistencia)
                    })
                .catch(error => {
                    console.error('Error en entrevista')
                })
            })
            .catch(error => {
                console.error('Error en inscripcion')
            })
        })
        .catch(error => {
            console.error('Error en asistencia')
    })
 */

async function main () {
    const entrevistado = await enterviewKodemiaPromise(kodemia)
    const inscrito = await inscriptKodemiaPromise(entrevistado)
    const asistencia = await assistKodemiaPromise(inscrito)

    console.log('Done', asistencia)
}

main()
    .then(() => {
        console.log('TodoOK')
    })
    .catch(error => {
        console.error('Todo mal')
    })