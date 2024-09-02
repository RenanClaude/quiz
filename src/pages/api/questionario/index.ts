import { NextApiRequest, NextApiResponse } from "next";
import questions from "../questionData";
import { shuffle } from "@/functions/array";

const questionnaire = (req: NextApiRequest, res: NextApiResponse) => {
  const ids = questions.map((question) => (question.id));
  res.status(200).json(shuffle(ids));
}

export default questionnaire;