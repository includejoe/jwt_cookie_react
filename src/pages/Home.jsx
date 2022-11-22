import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Home({ name }) {
  return <div>{name ? `Hi ${name}` : "You are not logged in"}</div>;
}
