import type { NextApiRequest, NextApiResponse } from "next";
import questions from "../questionData";

export default function handler(req: NextApiRequest, res: NextApiResponse) {

  const selectedId = Number(req.query.id);
  const selectedQuestion = questions.filter((question) => (question.id === selectedId));

  if (selectedQuestion.length === 1) {
    const question = selectedQuestion[0].shuffleAlternatives();
    res.status(200).json(question.toObject());
  } else {
    res.status(204).send({});
  }

}
