export function FormContent({ data }: { data?: any }) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "70px 20px",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          padding: "20px",
          borderRadius: "8px",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            fontSize: "1.8rem",
            marginBottom: ".8rem",
          }}
        >
          Nouvelle soumission de formulaire
        </h1>

        <div style={{ marginBottom: ".5rem" }}>
          <h2 style={{ fontSize: "1.4rem" }}>Info sur le potentiel client: </h2>
          <p>
            <span>Nom complet</span>: ${data?.name || "Fullname"}
          </p>
          <p>
            <span> Adresse mail</span>: ${data?.email || "1hTnN@example.com"}
          </p>
        </div>
        <div>
          <h2 style={{ fontSize: "1.4rem" }}>Pourquoi vous nous contacter ?</h2>

          <ul>
            <li>Développement Web?: ${data?.dev_web ? "Oui" : "Non"}</li>
            <li>
              Développement Mobile ou Desktop?: $
              {data?.dev_mob_and_desk ? "Oui" : "Non"}
            </li>
            <li>Collaboration?:${data?.colab ? "Oui" : "Non"}</li>
            <li>Autres?: ${data?.other ? "Oui" : "Non"}</li>
          </ul>
        </div>

        <div>
          <h2 style={{ fontSize: "1.4rem" }}>Votre fourchette budgétaire</h2>
          <div>
            <h3 style={{ fontSize: "1.2rem" }}>Valeur venant du slider</h3>
            <p>Montant min: {data?.minValuSlider || "500"}</p>
            <p>Montant max: {data?.maxValueSlider || "1000"}</p>
          </div>
          <div>
            <h3 style={{ fontSize: "1.2rem" }}>Valeur personnalisée</h3>
            <p>Montant min: {data?.minValueCustom || "500"}</p>
            <p>Montant max: {data?.maxValueCustom || "1000"}</p>
          </div>
        </div>

        <div>
          <h2 style={{ fontSize: "1.4rem" }}>Votre message</h2>
          <p>
            {data?.message ||
              "Ici, le Génie est au Service de vos Ambitions Numériques"}
          </p>
        </div>
      </div>
    </div>
  );
}

// dev_web: "on";
// email: "joeitax3@gmail.com";
// maxValueCustom: "1000";
// maxValueSlider: "1000";
// message: "Ici, le Génie est au Service de vos Ambitions Numériques";
// minValuSlider: "500";
// minValueCustom: "500";
// name: "Joe";
