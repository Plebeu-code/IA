const Database = require('./db')
//const db = require('sqlite-async')
const createProffy = require('./createProffy')

Database.then(async (db) => {
    proffyValue = {
        name: "Plebeu Dev",
        avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQBjQC6aWVvCt6F3Xtqrbw6G7GCEnDEV4hzIA&usqp=CAU",
        whatsapp: "75983328630",
        bio: "Entusiasta das melhores tecnologias de química avançada. Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
    }

    classValue = {
        subject: "Ciências",
        cost: "20",
    }

    classScheduleValues = [
        {
            weekday: 1,
            time_from: 720,
            time_to: 1220
        },

        {
            weekday: 0,
            time_from: 520,
            time_to: 1220
        }
    ]

    // await createProffy(db, {proffyValue, classScheduleValues, classValue})

    // Consultar os dados inseridos

    // Todos os proffys
    const selectedProffys = await db.all("SELECT * FROM proffys")
    // console.log(selectedProffys)

    // Consultar as classes de um determinado professor
    // E trazer junto os dados do professor

    const selectClassesAndProffys = await db.all(`
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1;
    `)
    //console.log(selectClassesAndProffys)

    // O horário que a pessoa trabalha, por exemplo, é das 8h - 18h
    // O horário do time_from (8h) precisa ser menor ou igual ao horário solicitado
    // O time_to precisa ser acima (obrigatoriamente) 1:34
    const selectClassesSchedules = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = class_id = 1
        AND class_schedule.weekday = "0"
        AND class_schedule.time_from <= "520"
    `)
    console.log(selectClassesSchedules)

})