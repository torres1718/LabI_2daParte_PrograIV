//Modulos a utilizar
const fs=require('fs');
//para usar XLSX investigue una paqueteria para la conversion se debe usar el comando en terminal: npm install xlsx
const XLSX = require("xlsx");
//para usar el readlineSync se debe usar el comando en terminal: npm install readline-sync
const readLineSync = require('readline-sync');

//opciones a realizar en el programa
const opciones =readLineSync.question('Ingrese la opcion que desea realizar: \n 1.Leer archivo \n 2.Crear archivo \n 3.Convertir archivo\n');

//Leemos el archivo si selecciona la opcion 1
if(opciones==="1"){

    //variable que almacena el nombre del archivo
    archivo=readLineSync.question("Ingrese el nombre del archivo a leer con la extensión: ");

    //variable para el contenido del archivo
    var contenidoArchivo=fs.readFileSync(archivo);
    console.log(contenidoArchivo.toString());


    //Si el usuario selecciona la opcion 2
}else if(opciones==="2"){

    //variable para escribir el nombre del archivo
    archivo=readLineSync.question("Escriba el nombre para su archivo: ");
    console.log("Escriba el contenido del archivo");

    //variable para el contenido del archivo
    var contenidoArchivo=readLineSync.question("");
    archivoCreado=archivo+".txt";
    fs.writeFileSync(archivoCreado,contenidoArchivo);
    console.log("Archivo creado exitosamente y se llama: "+archivoCreado);

    //Si el usuario selecciona la opcion 3
}else if(opciones==="3"){
    //variable para elegir el formato a convertir
    var convertirOpcion=readLineSync.question("Ingrese la opcion que desea convertir: \n 1.xlsx a txt \n 2.Txt a xlsx \n 3.xlsx a csv \n 4.csv a xlsx \n 5.txt a pdf ");
    //variable para escribir el nombre del archivo a convertir
    var archivoViejo=readLineSync.question("Ingrese el nombre del archivo a convertir sin su extensión: ");
    //variable para el nombre del archivo convertido
    var archivoNuevo=readLineSync.question("Ingrese el nombre del archivo a crear sin su extensión: ");

    //Si el usuario selecciona la opcion 1
    if(convertirOpcion==="1"){
        const workbook = XLSX.readFile(archivoViejo+".xlsx");
        const sheet_name_list = workbook.SheetNames;
        const worksheet = workbook.Sheets[sheet_name_list[0]];
        const result = XLSX.utils.sheet_to_json(worksheet);
        fs.writeFileSync(archivoNuevo+".txt",JSON.stringify(result));
        console.log("Archivo convertido exitosamente y se llama: "+archivoNuevo+".txt");

        //Si el usuario selecciona la opcion 2
}else if(convertirOpcion==="2"){
    const workbook = XLSX.readFile(archivoViejo+".txt");
    const sheet_name_list = workbook.SheetNames;
    const worksheet = workbook.Sheets[sheet_name_list[0]];
    const result = XLSX.utils.sheet_to_json(worksheet);
    XLSX.writeFile(workbook,archivoNuevo+".xlsx");
    console.log("Archivo convertido exitosamente y se llama: "+archivoNuevo+".xlsx");

    //Si el usuario selecciona la opcion 3
}else if(convertirOpcion==="3"){
    const workbook = XLSX.readFile(archivoViejo+".xlsx");
    const sheet_name_list = workbook.SheetNames;
    const worksheet = workbook.Sheets[sheet_name_list[0]];
    const result = XLSX.utils.sheet_to_csv(worksheet);
    fs.writeFileSync(archivoNuevo+".csv",result);
    console.log("Archivo convertido exitosamente y se llama: "+archivoNuevo+".csv");

    //Si el usuario selecciona la opcion 4
}else if(convertirOpcion==="4"){
    const workbook = XLSX.readFile(archivoViejo+".csv");
    const sheet_name_list = workbook.SheetNames;
    const worksheet = workbook.Sheets[sheet_name_list[0]];
    const result = XLSX.utils.sheet_to_csv(worksheet);
    XLSX.writeFile(workbook,archivoNuevo+".xlsx");
    console.log("Archivo convertido exitosamente y se llama: "+archivoNuevo+".xlsx");

    //Si el usuario ingresa una opcion 5
}else if(convertirOpcion==="5"){
    const workbook = XLSX.readFile(archivoViejo+".txt");
    const sheet_name_list = workbook.SheetNames;
    const worksheet = workbook.Sheets[sheet_name_list[0]];
    const result = XLSX.utils.sheet_to_csv(worksheet);
    XLSX.writeFile(workbook,archivoNuevo+".pdf");
    console.log("Archivo convertido exitosamente y se llama: "+archivoNuevo+".pdf");
}else{
    console.log("Opcion no valida");
}
}else{
    console.log("Opcion no valida");
}

//la opcion 5 no le pude hacer funcionar jsjs:(