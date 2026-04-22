
type CardHeaderProps = {
    heading: string,
    subHeading: string
}

const CardHeading = ({ heading, subHeading} : CardHeaderProps) => {
  return (
    <div className="mb-4 space-y-1">
        <h2 className="text-base font-semibold">
            {heading}
        </h2>
        <p className="text-sm text-muted-foreground">
            {subHeading}
        </p>
    </div>
  )
}

export default CardHeading
