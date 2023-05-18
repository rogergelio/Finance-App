import mongoose from "mongoose";
import { loadType } from "mongoose-currency";

const Schema = mongoose.Schema;
loadType(mongoose);

const TableSchema = new Schema(
    {
        Rk: {
          type: Number,
          required: true,
        },
        Squad: {
          type: String,
          required: true,
        },
        MP: {
          type: Number,
          required: true,
        },
        W: {
          type: Number,
          required: true,
        },
        D: {
          type: Number,
          required: true,
        },
        L: {
          type: Number,
          required: true,
        },
        GF: {
          type: Number,
          required: true,
        },
        GA: {
          type: Number,
          required: true,
        },
        GD: {
          type: Number,
          required: true,
        },
        Pts: {
          type: Number,
          required: true,
        },
        "Pts/MP": {
          type: Number,
          required: true,
        },
        xG: {
          type: Number,
          required: true,
        },
        xGA: {
          type: Number,
          required: true,
        },
        xGD: {
          type: Number,
          required: true,
        },
        "xGD/90": {
          type: Number,
          required: true,
        },
        "Last 5": {
          type: String,
          required: true,
        },
        Attendance: {
          type: Number,
          required: true,
        },
        "Top Team Scorer": {
          type: String,
          required: true,
        },
        Goalkeeper: {
          type: String,
          required: true,
        },
        Notes: {
          type: String,
          required: true,
        },
  },
  { timestamps: true, toJSON: { getters: true } }
);

const Table = mongoose.model("Table", TableSchema);

export default Table;
