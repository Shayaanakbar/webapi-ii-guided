Async/Await vs promises

Promise
 (req, res) => {
    db.find()
    .then(data => {
        res.json(data);
    })
    .catch(err => {
        res.status(500).json({ err });
    });
 }
 
 
 
 This callback wont work because: THIS WILL RUN BEFORE WE RECIEVE OUR DATA
 SO DATA WILL BE UNDEFINED. RES.JSON(DATA); WILL RUN BEFORE IT FINISHES
 DATABASE METHOD RISKS THROWING AN ERROR. SERVER WOULD CRASH ALL TOGETHER.
 Bad form:
 
 Async/Await
 (req, res) => {
    TRY BLOCK - STARNDARD JS {
       const data = await db.find(); 
       
       res.json(data);
    } catch (err) {
        res.status(500).json({err)};
    }
    
 }
