export const emailTemplate = ({
  name,
  email,
  phone,
  weddingDate,
  weddingVenue,
  preparationVenue,
  numberOfPeople,
  message,
}) => {
  return `<html lang="en">
  <head>
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Tigo-Lee Professional Make-up Artist</title>
  </head>
  <body style="font-family: Arial, sans-serif; line-height: 1.6; margin: 0; padding: 0;">
    <table style="width: 100%; background-color: #D8B988;">
      <tr>
        <td>
          <h1 style="padding: 1rem;">Tigo-Lee Professional Make-up Artist</h1>
        </td>
      </tr>
    </table>

    <table style="width: 100%; padding: 1rem;">
      <tr>
        <td>
          <h3 style="font-size: 1.25rem">Website form submission</h3>
          <p style="font-size: 1rem; margin-top: 1rem; font-weight: 500;">
            Name: <span style="font-weight: 200; font-style: italic;">${name}</span>
          </p>
          <p style="font-size: 1rem; font-weight: 500;">
            Email address: <span style="font-weight: 200; font-style: italic;">${email}</span>
          </p>
          ${
            phone
              ? `
              <p style="font-size: 1rem; font-weight: 500;">
            Phone: <span style="font-weight: 200; font-style: italic;">${phone}</span>
          </p>
          `
              : ""
          }
          ${
            weddingDate
              ? `
              <p style="font-size: 1rem; font-weight: 500;">
            Wedding Date: <span style="font-weight: 200; font-style: italic;">${weddingDate}</span>
          </p>
          `
              : ""
          }
          ${
            weddingVenue
              ? `
              <p style="font-size: 1rem; font-weight: 500;">
            Wedding Venue: <span style="font-weight: 200; font-style: italic;">${weddingVenue}</span>
          </p>
          `
              : ""
          }
          ${
            preparationVenue
              ? `
              <p style="font-size: 1rem; font-weight: 500;">
            Preparation Venue: <span style="font-weight: 200; font-style: italic;">${preparationVenue}</span>
          </p>
          `
              : ""
          }
          ${
            numberOfPeople
              ? `
              <p style="font-size: 1rem; font-weight: 500;">
            Number of People: <span style="font-weight: 200; font-style: italic;">${numberOfPeople}</span>
          </p>
          `
              : ""
          }
          <p style="font-size: 1rem; font-weight: 500;">
            Message:
            <br />
            <span style="font-weight: 200; font-style: italic;">${message}</span>
          </p>
        </td>
      </tr>
    </table>
  </body>
</html>
`;
};
