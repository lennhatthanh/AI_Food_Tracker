import { Button } from "@/components/ui/button";
import React from "react";
import { Link } from "react-router-dom";

export default function DashBoard() {
    return (
        <Link to="/landing-page">
            <Button>DashBoard</Button>
        </Link>
    );
}
