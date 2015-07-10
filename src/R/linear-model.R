crm_sfy <- read.csv("http://data.baltimorecity.gov/api/views/qmw9-b8ep/rows.csv?accessType=DOWNLOAD",row.names=1)
edu_yth <- read.csv("http://data.baltimorecity.gov/api/views/f9ua-ivaj/rows.csv?accessType=DOWNLOAD",row.names=1)
attach(crm_sfy)
attach(edu_yth)
result <- lm(juvdrug11 ~ eattend11)
summary(result)
#plotting
#plot the points plot(x,y,xlim=c(a,b),ylim=c(a,b))

#abline(mod1, lwd=2)

# calculate residuals and predicted values
#res <- signif(residuals(mod1), 5)
#pre <- predict(mod1)

# plot distances between points and the regression line
#segments(x, y, x, pre, col="red")

# add labels (res values) to points
#library(calibrate)
#textxy(x, y, res, cx=0.7)
