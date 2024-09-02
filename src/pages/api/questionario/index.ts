import { NextApiRequest, NextApiResponse } from "next";
import questions from "../questionData";

const questionnaire = (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json(questions.map((question) => (question.id)))
}

export default questionnaire;