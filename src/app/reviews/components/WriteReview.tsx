"use client";
import { useState } from "react";
import {
  Box,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import CustomButton from "@/app/components/CustomButton";
import CreateRoundedIcon from "@mui/icons-material/CreateRounded";
import useWriteReviewForm from "../hooks/useWriteReviewForm";
import { Loading } from "@/app/components/Loading";

const WriteReview = () => {
  const [showWrite, setShowWrite] = useState(false);
  const {
    loading,
    formData,
    handleSelectChange,
    handleSubmit,
    handleTextChange,
  } = useWriteReviewForm();

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    await handleSubmit(e);
    setShowWrite(false); // 폼 제출 후 작성 칸을 닫음
  };

  const show = () => setShowWrite((prev) => !prev);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <Container maxWidth="md" sx={{ marginTop: 2 }}>
          <Stack
            onClick={show}
            alignItems={"flex-end"}
            sx={{ cursor: "pointer" }}
          >
            <Stack flexDirection={"row"} alignItems={"center"}>
              <CreateRoundedIcon sx={{ fontSize: 20 }} />
              <Typography ml={0.5} fontSize={15} fontWeight={600}>
                후기 작성
              </Typography>
            </Stack>
          </Stack>
          {showWrite && (
            <Box>
              <form onSubmit={handleFormSubmit} method="POST">
                <Stack direction={"row"} gap={1}>
                  <FormControl fullWidth margin="normal" size="small">
                    <InputLabel id="age-label">연령대 *</InputLabel>
                    <Select
                      labelId="age-label"
                      id="age"
                      name="age"
                      value={formData.age}
                      onChange={handleSelectChange}
                      required
                      label="연령대 *"
                    >
                      <MenuItem value={"20"}>20대</MenuItem>
                      <MenuItem value={"30"}>30대</MenuItem>
                      <MenuItem value={"40"}>40대</MenuItem>
                      <MenuItem value={"50"}>50대</MenuItem>
                      <MenuItem value={"60"}>60대 이상</MenuItem>
                    </Select>
                  </FormControl>

                  <FormControl fullWidth margin="normal" size="small">
                    <InputLabel id="gender-label">성별 *</InputLabel>
                    <Select
                      labelId="gender-label"
                      id="gender"
                      name="gender"
                      value={formData.gender}
                      onChange={handleSelectChange}
                      required
                      label="성별"
                    >
                      <MenuItem value="M">남성</MenuItem>
                      <MenuItem value="F">여성</MenuItem>
                    </Select>
                  </FormControl>
                </Stack>

                <TextField
                  size="small"
                  label="비밀번호"
                  name="password"
                  type="password"
                  fullWidth
                  margin="normal"
                  value={formData.password}
                  onChange={handleTextChange}
                  required
                  sx={{ marginTop: 0 }}
                />
                <TextField
                  size="small"
                  label="이름"
                  name="nickname"
                  fullWidth
                  margin="normal"
                  value={formData.nickname}
                  onChange={handleTextChange}
                  required
                  sx={{ marginTop: 0 }}
                />

                <FormControl
                  fullWidth
                  margin="normal"
                  size="small"
                  sx={{ marginTop: 0 }}
                >
                  <InputLabel id="category-label">상담내역 *</InputLabel>
                  <Select
                    labelId="category-label"
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={handleSelectChange}
                    required
                    label="상담내역 *"
                  >
                    <MenuItem value="join">보험을 가입하고 싶어요.</MenuItem>
                    <MenuItem value="inquiry">
                      보험료가 괜찮은지 궁금해요.
                    </MenuItem>
                    <MenuItem value="check">
                      내 보험 상태를 점검받고 싶어요.
                    </MenuItem>
                    <MenuItem value="claim">병원비를 청구하고 싶어요.</MenuItem>
                    <MenuItem value="question">간단한 질문이 있어요.</MenuItem>
                  </Select>
                </FormControl>
                <TextField
                  label="내용"
                  name="content"
                  fullWidth
                  margin="normal"
                  value={formData.content}
                  onChange={handleTextChange}
                  multiline
                  rows={5}
                  required
                  sx={{ marginTop: 0 }}
                />
                <Stack>
                  <CustomButton
                    disableRipple
                    type="submit"
                    variant="contained"
                    color="primary"
                    size="small"
                    sx={{
                      marginTop: 0,
                      marginBottom: 2,
                      alignSelf: "flex-end",
                    }}
                  >
                    등록
                  </CustomButton>
                </Stack>
              </form>
            </Box>
          )}
        </Container>
      )}
    </>
  );
};

export default WriteReview;
