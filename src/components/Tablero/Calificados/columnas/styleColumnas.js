import styled from "@emotion/styled";

export const AvatarImg = styled("img")(({ theme }) => ({
  width: "80px",
  height: "80px",
}));

export const BoxApplicant = styled("div")(({ theme }) => ({
  display: "flex",
  columnGap: "10px",
  alignItems: "center",
}));

export const BoxQualification = styled("div")(({ theme }) => ({
  display: "flex",
  columnGap: "10px",
  alignItems: "center",
  fontSize: "1.5rem",
}));

export const BoxCompatibility = styled("div")(({ theme }) => ({
  display: "flex",
  columnGap: "10px",
  alignItems: "center",
  fontSize: "1.8rem",
}));
