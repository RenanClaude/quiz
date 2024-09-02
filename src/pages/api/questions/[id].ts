import type { NextApiRequest, NextApiResponse } from "next";
import questions from "../questionData";
import QuestionModel from "@/model/quention";

type Data = {
  id: number,
  name: object;
};

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  res.status(200).json({
    id: Number(req.query.id),
    name: questions[0].toObject()
  });
}
