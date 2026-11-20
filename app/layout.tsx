import React, {ReactNode} from "react";

export default function RootLayout(
    { children,}:
        Readonly<{ children: React.ReactNode; }>
    ) {
    return (
        <html lang="en">
            <body>
            {children}
            </body>
        </html>
    );
}