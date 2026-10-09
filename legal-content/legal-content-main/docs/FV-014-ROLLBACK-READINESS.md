# FV-014 Rollback Readiness

Status: **FAIL**

## Recovery contract

- Production consumers use an immutable content reference.
- Recovery changes the consumer reference to the previous known-good Git SHA.
- Published Git history is not rewritten.
- Rollback does not silently promote or demote legal content statuses.
- FV-014 is an engineering recovery gate, not a legal-quality certification.

## Errors

- FV-013 release snapshot is FAIL
- FV-013 snapshot has no gitSha
