import mongoose from "mongoose";
import { loadType } from "mongoose-currency";

const Schema = mongoose.Schema;
loadType(mongoose);

const competitionSchema = new Schema(
  {
    competition_id: { type: Number, required: false },
    season_id: { type: Number, required: false },
    country_name: { type: String, required: false },
    competition_name: { type: String, required: false },
    competition_gender: { type: String, required: false },
    competition_youth: { type: Boolean, required: false },
    competition_international: { type: Boolean, required: false },
    season_name: { type: String, required: false },
    match_updated: { type: Date, required: false },
    match_updated_360: { type: Date, required: false },
    match_available_360: { type: Date, required: false },
    match_available: { type: Date, required: false },
  },
  { timestamps: true, toJSON: { getters: true } }
);

const Competition = mongoose.model("Competition", competitionSchema);

export default Competition;
