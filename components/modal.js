import { Box, Typography } from "@mui/material"
import { handleOpen, style } from "@mui/material"
import { handleClose, open } from "@mui/material"
import styles from "./modal.module.css"
import styled from "styled-components"

const Label = styled.label``
const Input=styled.input``

const Modal = () => {
  return (
    <>
      <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">
        WE NEED TREES</button>

      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg" className={styles.Modal}>
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <form>
                <Label className={styles.label}>First Name: </Label><Input type="text" />
                <Label className={styles.label}>Last Name: </Label><Input type="text" />
                <Label className={styles.label}>Phone Number: </Label><Input type="text" />
                <Label className={styles.label}>Email: </Label><Input type="text" />
                <Label className={styles.label}>County: </Label><Input type="text" />
                <Label className={styles.label}>Constituency: </Label><Input type="text" />
                <Label className={styles.label}>Ward: </Label><Input type="text" />
                <Label className={styles.label}>LandMark: </Label><Input type="text" />
                <Label className={styles.label}>Soil type: </Label><Input type="text"/>


              </form>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>


    </>)
}
export default Modal
