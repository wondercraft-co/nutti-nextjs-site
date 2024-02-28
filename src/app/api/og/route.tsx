/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get("title");
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 40,
          color: "black",
          background: "white",
          width: "100%",
          height: "100%",
          padding: "50px 200px",
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          width="871"
          height="630"
          src={`https://www.nutti.co/ogbg.png`}
          alt=""
          style={{
            position: "absolute",
            zIndex: 0,
            width: "871px",
            top: 0,
            right: 0,
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            zIndex: 10,
            width: "450px",
            top: 0,
            left: 0,
            height: "630px",
            background: "white",
          }}
        >
          <img
            //100 x36
            width="150"
            height="54"
            src={`https://www.nutti.co/nutti-logo.svg`}
            alt=""
            style={{
              marginBottom: 40,
            }}
          />
          {title ? title : "Cremas de nueces 100% naturales"}
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
