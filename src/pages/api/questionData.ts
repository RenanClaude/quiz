import QuestionModel from "../../model/quention";
import AlternativeModel from "../../model/alternative";

const questions: QuestionModel[] = [
    new QuestionModel(306, 'Qual bicho transmite a Doença de Chagas?', [
        AlternativeModel.incorrect('Abelha'),
        AlternativeModel.incorrect('Barata'),
        AlternativeModel.incorrect('Pulga'),
        AlternativeModel.correct('Barbeiro'),
    ]),
    new QuestionModel(202, 'Qual fruto é conhecido no Norte e Nordeste como "jerimum"?', [
        AlternativeModel.incorrect('Caju'),
        AlternativeModel.incorrect('Côco'),
        AlternativeModel.incorrect('Chuchu'),
        AlternativeModel.correct('Abóbora'),
    ]),
    new QuestionModel(203, 'Qual é o coletivo de cães?', [
        AlternativeModel.incorrect('Manada'),
        AlternativeModel.incorrect('Alcateia'),
        AlternativeModel.incorrect('Rebanho'),
        AlternativeModel.correct('Matilha'),
    ]),
    new QuestionModel(204, 'Qual é o triângulo que tem todos os lados diferentes?', [
        AlternativeModel.incorrect('Equilátero'),
        AlternativeModel.incorrect('Isóceles'),
        AlternativeModel.incorrect('Trapézio'),
        AlternativeModel.correct('Escaleno'),
    ]),
    new QuestionModel(205, 'Quem compôs o Hino da Independência?', [
        AlternativeModel.incorrect('Castro Alves'),
        AlternativeModel.incorrect('Manuel Bandeira'),
        AlternativeModel.incorrect('Carlos Gomes'),
        AlternativeModel.correct('Dom Pedro I'),
    ]),
    new QuestionModel(206, 'Qual é o antônimo de "malograr"?', [
        AlternativeModel.incorrect('Perder'),
        AlternativeModel.incorrect('Fracassar'),
        AlternativeModel.incorrect('Desprezar'),
        AlternativeModel.correct('Conseguir'),
    ]),
    new QuestionModel(207, 'Em que país nasceu Carmen Miranda?', [
        AlternativeModel.incorrect('Argentina'),
        AlternativeModel.incorrect('Espanha'),
        AlternativeModel.incorrect('Brasil'),
        AlternativeModel.correct('Portugal'),
    ]),
    new QuestionModel(208, 'Qual foi o último Presidente do período da ditadura militar no Brasil?', [
        AlternativeModel.incorrect('Costa e Silva'),
        AlternativeModel.incorrect('Emílio Médici'),
        AlternativeModel.incorrect('Ernesto Geisel'),
        AlternativeModel.correct('João Figueiredo'),
    ]),
    new QuestionModel(209, 'Seguindo a sequência do baralho, qual carta vem depois do dez?', [
        AlternativeModel.incorrect('Ás'),
        AlternativeModel.incorrect('Nove'),
        AlternativeModel.incorrect('Rei'),
        AlternativeModel.correct('Valete'),
    ]),
    new QuestionModel(210, 'O adjetivo "venoso" está relacionado a:', [
        AlternativeModel.incorrect('Vela'),
        AlternativeModel.incorrect('Vento'),
        AlternativeModel.incorrect('Vênia'),
        AlternativeModel.correct('Veia'),
    ]),
    new QuestionModel(211, 'Que nome se dá à purificação por meio da água?', [
        AlternativeModel.incorrect('Abrupção'),
        AlternativeModel.incorrect('Abolição'),
        AlternativeModel.incorrect('Abnegação'),
        AlternativeModel.correct('Ablução'),
    ]),
    new QuestionModel(212, 'Qual montanha se localiza entre a fronteira do Tibet com o Nepal?', [
        AlternativeModel.incorrect('Monte Branco'),
        AlternativeModel.incorrect('Monte Fuji'),
        AlternativeModel.incorrect('Monte Carlo'),
        AlternativeModel.correct('Monte Everest'),
    ]),
    new QuestionModel(213, 'Em que parte do corpo se encontra a epiglote?', [
        AlternativeModel.incorrect('Estômago'),
        AlternativeModel.incorrect('Pâncreas'),
        AlternativeModel.incorrect('Rim'),
        AlternativeModel.correct('Pescoço'),
    ]),
    new QuestionModel(214, 'A compensação por perda é chamada de...', [
        AlternativeModel.incorrect('Déficit'),
        AlternativeModel.incorrect('Indexação'),
        AlternativeModel.incorrect('Indébito'),
        AlternativeModel.correct('Indenização'),
    ]),
    new QuestionModel(215, 'Que personagem do folclore brasileiro tem uma perna só?', [
        AlternativeModel.incorrect('Cuca'),
        AlternativeModel.incorrect('Curupira'),
        AlternativeModel.incorrect('Boitatá'),
        AlternativeModel.correct('Saci-pererê'),
    ]),
    new QuestionModel(216, 'Quem é o "patrono" do Exército Brasileiro?', [
        AlternativeModel.incorrect('Marechal Deodoro'),
        AlternativeModel.incorrect('Barão de Mauá'),
        AlternativeModel.incorrect('Marquês de Pombal'),
        AlternativeModel.correct('Duque de Caxias'),
    ]),
]

export default questions;