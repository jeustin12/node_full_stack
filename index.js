const express = require("express");
const app = express();
const morgan = require("morgan");
const cors = require("cors");
const Persona = require("./models/person");
require("dotenv").config();

morgan.token("body", function (req) {
    return JSON.stringify(req.body);
});
app.use(express.json());
app.use(
    morgan(
        ":method :url :status :res[content-length] - :response-time ms :body"
    )
);
app.use(cors());
app.use(express.static("build"));

app.get("/info", (request, response) => {
    Persona.find({}).then((persons) => {
        const info = `
        Phonebook has info for ${persons.length} people
        <br/><br/>
        ${new Date()}
      `;
        response.send(info);
    });
});

app.get("/api/persons", (request, response) => {
    console.log(process.env.MONGO_DB);
    Persona.find().then((persons) => {
        response.json(persons.map((p) => p.toJSON()));
    });
});

app.get("/api/persons/:id", (request, response, next) => {
    Persona.findById(request.params.id)
        .then((person) => {
            if (person) {
                response.json(person.toJSON());
            } else {
                response.status(404).end();
            }
        })
        .catch((error) => {
            console.log(error);
            response.status(500).end();
        });
});

app.post("/api/persons", (request, response) => {
    const body = request.body;
    if (!body.name || !body.number) {
        return response.status(400).json({
            error: "content missing",
        });
    }
    if (body.name.length < 4) {
        return response.status(400).json({
            error: "name must have 4 or more letters",
        });
    }
    if (body.number.length < 8) {
        return response.status(400).json({
            error: "number must have 8 or more numbers",
        });
    }

    const person = new Persona({
        name: body.name,
        number: body.number || false,
    });

    person.save().then((newPerson) => {
        response.json(newPerson.toJSON());
    });
});
app.put("/api/persons/:id", (request, response) => {
    const { name, number } = request.body;

    Persona.findByIdAndUpdate(
        request.params.id,
        { name, number },
        { new: true }
    )
        .then((updatedPerson) => {
            response.json(updatedPerson.toJSON());
        })
        .catch((error) => next(error));
});
app.delete("/api/persons/:id", (request, response, next) => {
    Persona.findByIdAndRemove(request.params.id)
        .then(() => {
            response.status(204).end();
        })
        .catch((error) => next(error));
});

app.listen(process.env.PORT || 4000, () => {
    console.log(`Server running on port ${process.env.PORT}`);
});
